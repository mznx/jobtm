import { ModuleI } from './interface/module.interface';
import AuthModule from './module/auth/auth.module';

const AppModule: ModuleI = {
    import: [
        AuthModule,
    ],
};

export default AppModule;
