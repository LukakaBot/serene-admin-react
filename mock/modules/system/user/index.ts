import Mock from 'mockjs';
import { resultSuccess } from '../../../utils/tools';

const { Random } = Mock;

export default [
  {
    url: '/api/user/account/token',
    methods: 'POST',
    response: () => {
      return resultSuccess({
        userId: Random.id(),
        username: Random.cname(),
        token: Random.string(32),
      })
    }
  }
];