import '../utils/shim';
import { TokenModule } from '../modules/token';
import { UsersModule } from '../modules/users';
import { UtilsModule } from '../modules/utils';
import { get } from '../utils/rest';
import { createApiKeyMissingError } from './sdk-exceptions';
export class MagicAdminSDK {
    /**
     * Deprecated. Use `init` instead.
     * @param secretApiKey
     * @param options
     */
    constructor(secretApiKey, options) {
        this.secretApiKey = secretApiKey;
        const endpoint = options?.endpoint ?? 'https://api.magic.link';
        this.apiBaseUrl = endpoint.replace(/\/+$/, '');
        this.clientId = options?.clientId ?? null;
        // Assign API Modules
        this.token = new TokenModule(this);
        this.users = new UsersModule(this);
        this.utils = new UtilsModule(this);
    }
    static async init(secretApiKey, options) {
        if (!secretApiKey)
            throw createApiKeyMissingError();
        let hydratedOptions = options ?? {};
        const endpoint = hydratedOptions.endpoint ?? 'https://api.magic.link';
        const apiBaseUrl = endpoint.replace(/\/+$/, '');
        if (!hydratedOptions.clientId) {
            const resp = await get(`${apiBaseUrl}/v1/admin/client/get`, secretApiKey);
            hydratedOptions = { ...hydratedOptions, clientId: resp.client_id };
        }
        return new MagicAdminSDK(secretApiKey, hydratedOptions);
    }
}
//# sourceMappingURL=sdk.js.map