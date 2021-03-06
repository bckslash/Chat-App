import React, { useState } from "react";
import Picker from "emoji-picker-react";

const EmojiPicker = ({ input, setInput }: any) => {
    // @ts-ignore
    const onEmojiClick = (e, emojiObject) => {
        e.preventDefault();

        setInput(input + emojiObject.emoji);
    };

    return (
        <div className="absolute bottom-16 z-10">
            <Picker onEmojiClick={onEmojiClick} />
        </div>
    );
};

export default EmojiPicker;
