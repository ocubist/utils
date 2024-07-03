/// <reference types="node" />
/**
 * Hook to use the error alchemy for the HTTP request handler.
 *
 * @param {string} context - The context for the error alchemy.
 * @returns {ReturnType<typeof useErrorAlchemy>} - The error alchemy instance for the given context.
 */
export declare const useApiHandlerErrorAlchemy: (context: string) => {
    craftErrorSynthesizer: (middlewareChain: import("@ocubist/error-alchemy").SynthesizerMiddlewareChain) => import("@ocubist/error-alchemy").Synthesizer;
    craftMysticError: (props: {
        name: string;
        severity?: import("@ocubist/error-alchemy").Severity | undefined;
        cause?: string | undefined;
        errorCode?: import("@ocubist/error-alchemy").ErrorCode | undefined;
    }) => {
        new (props: {
            message: string;
            origin?: unknown;
            payload?: Record<string, unknown> | undefined;
        }): {
            dynamicClassUuid: string;
            instanceUuid: string;
            name: string;
            severity: import("@ocubist/error-alchemy").Severity;
            origin?: unknown;
            cause?: string | undefined;
            payload: Record<string, unknown>;
            module?: string | undefined;
            context?: string | undefined;
            errorCode: import("@ocubist/error-alchemy").ErrorCode;
            readonly severityDescription: string;
            readonly simpleGetter: string;
            readonly identifier: string;
            message: string;
            stack?: string | undefined;
        };
        compare(err: unknown): boolean;
        captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    craftSynthesizedError: (props: {
        name: string;
        severity?: import("@ocubist/error-alchemy").Severity | undefined;
        cause?: string | undefined;
        errorCode?: import("@ocubist/error-alchemy").ErrorCode | undefined;
    }) => {
        new (props: {
            message: string;
            origin?: unknown;
            payload?: Record<string, unknown> | undefined;
        }): {
            dynamicClassUuid: string;
            instanceUuid: string;
            name: string;
            severity: import("@ocubist/error-alchemy").Severity;
            origin?: unknown;
            cause?: string | undefined;
            payload: Record<string, unknown>;
            module?: string | undefined;
            context?: string | undefined;
            errorCode: import("@ocubist/error-alchemy").ErrorCode;
            readonly severityDescription: string;
            readonly simpleGetter: string;
            readonly identifier: string;
            message: string;
            stack?: string | undefined;
        };
        compare(err: unknown): boolean;
        captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
        prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
        stackTraceLimit: number;
    };
    craftErrorTransmuter: <T = any>(detectorFunction: import("@ocubist/error-alchemy").DetectorFunction, transmuterFunction: import("@ocubist/error-alchemy").TransmuterFunction<T>) => import("@ocubist/error-alchemy").Transmuter<T>;
    craftErrorLogger: (props: import("@ocubist/error-alchemy").CraftErrorLoggerProps) => (err: unknown) => void;
    craftErrorResolverMap: (...mapping: [typeof import("@ocubist/error-alchemy").SynthesizedError, (err: import("@ocubist/error-alchemy").SynthesizedError) => void][]) => Map<typeof import("@ocubist/error-alchemy").SynthesizedError, (err: import("@ocubist/error-alchemy").SynthesizedError) => void>;
    craftErrorResolver: (props: import("@ocubist/error-alchemy").CraftErrorResolverProps) => (err: unknown) => void;
};
//# sourceMappingURL=useApiHandlerErrorAlchemy.d.ts.map