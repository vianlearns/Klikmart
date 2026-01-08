interface IconProps {
    name: string;
    className?: string;
    filled?: boolean;
    size?: number;
}

export function Icon({ name, className = '', filled = false, size }: IconProps) {
    const style: React.CSSProperties = {};
    if (size) {
        style.fontSize = `${size}px`;
    }
    if (filled) {
        style.fontVariationSettings = "'FILL' 1";
    }

    return (
        <span
            className={`material-symbols-outlined ${className}`}
            style={style}
        >
            {name}
        </span>
    );
}
