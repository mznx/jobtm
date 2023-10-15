import { ModuleI } from '../../interface/module.interface';
import AuthRoute from './auth.route';
import AuthService from './auth.service';

const AuthModule: ModuleI = {
    route: AuthRoute,
    service: AuthService,
};

export default AuthModule;
