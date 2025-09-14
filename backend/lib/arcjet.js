import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node"
import dotenv from "dotenv";

dotenv.config();

//init arcjet

export const aj =  arcjet({
    key: process.env.ARCJET_KEY,
    characteristics:["ip.src"],
    rules: [

        // Protegendo o app de ataques comuns e.G. SQL Injection, XSS, etc.
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            // bloqueando bots que não respeitam o robots.txt
            allow:[
                "CATEGORY:SEARCH_ENGINE"
            ]
        }),

        tokenBucket({
            mode:"LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        })
    ]
})