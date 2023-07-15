import '../utils/shim';
import { TokenModule } from '../modules/token';
import { UsersModule } from '../modules/users';
import { UtilsModule } from '../modules/utils';
import { MagicAdminSDKAdditionalConfiguration } from '../types';
export declare class MagicAdminSDK {
    readonly secretApiKey?: string | undefined;
    readonly apiBaseUrl: string;
    /**
     * Contains utilities for interacting with Decentralized Identity Tokens
     * (DIDTs).
     */
    readonly token: TokenModule;
    /**
     * Contains utilities for interacting with your Magic Authentication user
     * model.
     */
    readonly users: UsersModule;
    /**
     * Contains general utilities for Magic Admin SDK.
     */
    readonly utils: UtilsModule;
    /**
     * Unique client identifier
     */
    clientId: string | null;
    /**
     * Deprecated. Use `init` instead.
     * @param secretApiKey
     * @param options
     */
    constructor(secretApiKey?: string | undefined, options?: MagicAdminSDKAdditionalConfiguration);
    static init(secretApiKey?: string, options?: MagicAdminSDKAdditionalConfiguration): Promise<MagicAdminSDK>;
}
