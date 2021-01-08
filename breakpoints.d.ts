export const breakpoints = [
    {
        name: "mobile",
        value: 320
    },
    {
        name: "tablet",
        value: 768
    },
    {
        name: "laptop",
        value: 1280
    },
    {
        name: "desktop",
        value: 1600
    }, 
];
export function getBreakpoint(name) {
    const breakpoint = breakpoints.find((item)=>item.name === name
    );
    return breakpoint?.value || undefined;
}

