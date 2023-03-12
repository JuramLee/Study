import * as TodoApi from './todo/todo.api';
import * as UserApi from './user/user.api';
// export 한거 전부 가져오는데 객체 형태로 가지고옴

export const handler = [...Object.values(TodoApi), ...Object.values(UserApi)];
