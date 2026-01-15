declare module 'lenis/react' {
    import React from 'react';
    import Lenis from 'lenis';

    export const ReactLenis: React.ForwardRefExoticComponent<any>;
    export function useLenis(callback: (lenis: Lenis) => void, deps?: any[]): Lenis;
}

declare module 'lenis' {
    export default class Lenis {
        constructor(options?: any);
        start(): void;
        stop(): void;
        destroy(): void;
        on(event: string, callback: (args: any) => void): void;
        scrollTo(target: any, options?: any): void;
    }
}
