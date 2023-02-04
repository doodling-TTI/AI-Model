import React, { useState } from "react";
import "./App.css";
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Buffer } from "buffer";
import axios, { isCancel, AxiosError } from "axios";
import fetch from "node-fetch";

function App() {
    const onSubmits = () => {
        alert("hi");
        return null;
    };
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [prompt, setPrompt] = useState();
    const [newAccount, setNewAccount] = useState(true); // 새로운 유저인지 확인(초기값: true)

    const [userdata, setUserdata] = useState();
    const [img, setImg] = useState();
    const API_TOKEN = "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";
    window.Buffer = window.Buffer || Buffer;
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log(user);
            setUserdata(user);
        } catch (error) {
            console.log(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);

    async function query(data) {
        console.log(data);

        const response = await axios({
            url: `https://api-inference.huggingface.co/models/masibasi/doodling-ai`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
            responseType: "arraybuffer",
        });

        const mimeType = response.headers["content-type"];

        const result = response.data;

        const base64data = Buffer.from(result).toString("base64");

        const img = `data:${mimeType};base64,` + base64data;

        setImg(img);
        console.log(typeof img);
    }

    const onRequest = (prompt) => {
        const inputData = {
            inputs: `doodling-ai, ${prompt}`,
            options: {
                wait_for_model: true,
                use_cache: false,
            },
        };
        console.log("waiting response///");
        query(inputData);
    };

    return (
        <div className="App">
            <p>email</p>
            <input
                className="email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <p>username</p>
            <input
                className="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={onSubmits}>login</button>
            <button onClick={register}>register</button>
            <p>Doodling ai</p>
            <input
                className="prompt"
                onChange={(e) => {
                    setPrompt(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    onRequest(prompt);
                }}
            >
                request
            </button>
            <p>email : {email}</p>
            <p>password : {password}</p>
            <span onClick={toggleAccount}>
                {newAccount ? "Login" : "Create Account"}
            </span>
            <div className="result">
                <img src={img} />
            </div>
        </div>
    );
}

export default App;
