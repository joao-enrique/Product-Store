import express from 'express';
import helmet, { contentSecurityPolicy } from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoutes from './routes/ProductRoutes.js';
import { sql } from './config/db.js';
import { aj } from './lib/arcjet.js';
import path from "path"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

console.log(`Server is starting on port ${PORT}`);

app.use(express.json());
app.use(cors());
app.use(helmet({
    contentSecurityPolicy: false,
}));
app.use(morgan('dev'));

// Aplicando arcjet rate-limit em todas as rotas
app.use(async (req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested:1 });

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                return res.status(429).json({message:"Too many requests - Rate limit exceeded"});
            } else if(decision.reason.isBot()){
                return res.status(403).json({message:"Access denied - Bot detected"});
            } else {
                return res.status(403).json({message:"Access denied"});
            }
        }

        if(decision.results.some((result) => result.reason.isBot() && result.reason.isSpoofed())){
            return res.status(403).json({message:"Access denied - Spoofed bot detected"});
        }

        next();
    } catch (error) {
        console.log('Arcjet error:', error);
        next(error);
    }
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend", "dist")));

    app.get((req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}
// 📌 aqui você registra as rotas
app.use("/api/products", ProductRoutes);

async function initDB(){
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS products (
                id serial PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                description TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;

        console.log('Database initialized');
    } catch (error) {
        console.log('Error initDB:', error);
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
