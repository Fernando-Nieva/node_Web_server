import  env from 'dotenv'
import envvar from 'env-var'

env.config();

export const envs = {
    // PORT: get('PORT').required().asPortNumber(),
    PORT:envvar.get('PORT').default(3000).asPortNumber(),

    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
};



