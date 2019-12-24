
import * as React from "react";
import {ThemeContext} from '../utils/common.js';

interface audioProps {
    text: string;
    start: number;
    end: number;
    type? : "customer" | "service"
}
const Audio: React.FC<audioProps> = (props:audioProps) => {
    const themeValue = React.useContext(ThemeContext);
    const { text, start ,end} = props;
    return (
        <div>
        {`${text}${start}${end}`} {themeValue}
        </div>
        
    );
};

export default Audio;
 
