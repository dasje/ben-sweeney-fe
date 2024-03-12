import { useRef, useState } from "react";

import { motion } from "framer-motion";

const EncryptButton = ({textToDisplay, click, children}) => {
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;
    const CHARS = "!@#$%^&*():{};|,.<>/?";
    const TARGET_TEXT = textToDisplay;
    const onButtonClick = click;

    const intervalRef = useRef(null);
    const [text, setText] = useState(TARGET_TEXT);

    const titleStyle = {
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white",
        letterSpacing: "3px",
        paddingLeft: 30,
        paddingBottom: 5,
        paddingRight: 30,
        paddingTop: 5,
    }
    const [bgButtonColor, setBgButtonColor] = useState("#0f4c5c");
    const containerStyle = {
      backgroundColor: bgButtonColor,
      borderStyle: "solid",
      border: 100,
      borderRadius: 50,
      margin: "auto",
      width: '23%'
    }
    
    const scramble = () => {
        let pos = 0;
        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("").map((char, index) => {
                if (pos / CYCLES_PER_LETTER > index) {
                    return char;
                }
                const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                const randomChar = CHARS[randomCharIndex];
                return randomChar;
                }).join("");
                setText(scrambled);
                pos++;
                if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                    stopScramble();
                }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setText(TARGET_TEXT);
    };
    return (
        <div style={containerStyle}>
            <motion.div
                whileHover={{scale: 1.025,}}
                whileTap={{scale: 0.975,}}
                onMouseEnter={scramble}
                onMouseLeave={stopScramble}
                onClick={onButtonClick}
                style={titleStyle}
            >
                <div>
                    <span>{text}</span>
                </div>
                <motion.span
                    initial={{y: "100%",}}
                    animate={{y: "-100%",}}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 1,
                        ease: "linear",
                    }}
                />
            </motion.div>
        </div>
    );
};


export default EncryptButton;