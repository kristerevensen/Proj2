import { Link } from "react-router-dom"

export default function TButton({
    color = "blue",
    to = '',
    circle = false,
    href = null,
    link = false,
    target = "_blank",
    children,
}) {
    let classes = [
        "flex",
        "whitespace-nowrap",
        "text-sm",
        "border",
        "border-2",
        "border-transparent",
    ];

    if (link) {
        classes = [
            ...classes,
            "transition-colors",
        ];
        switch (color) {
            case "blue": [
                ...classes,
                "text-blue-600",
                "focus:border-blue-500",
                "focus:ring-blue-500",
            ];
                break;
            case "red": [
                ...classes,
                "text-red-600",
                "focus:border-red-500",
                "focus:ring-red-500",
            ];
                break;
            case "green": [
                ...classes,
                "text-green-600",
                "focus:border-green-500",
                "focus:ring-green-500",
            ];
        }
    } else {
        classes = [
            ...classes,
            "text-white",
            "focus:ring-2",
            "focus:ring-offset-2",
        ];
    }

    if (circle) {
        classes = [
            ...classes,
            "rounded-full",
            "p-2",
            "h-8",
            "w-8",
            "justify-center",
            "items-center",
            "text-sm",
        ];
    } else {
        classes = [
            ...classes,
            "rounded-md",
            "p-0",
            "py-2",
            "px-4",
            "rounded-md",

        ];
    }

    return (
        <>
        {link && (<a href={href} target={target} className={classes.join(" ")}>{children}</a>)}
        {to && (<Link to={to} className={classes.join(" ")}>{children}</Link>)}
        {!to && !href && (<button className={classes.join(" ")}>{children}</button>)}
        </>
  )
}
