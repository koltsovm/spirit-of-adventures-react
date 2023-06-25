import { User } from '../models/user.model';

async function create(candidate) {
  const existingUser = await User.findOne(candidate);

  if (existingUser) {
    return
  }
}

export { create };
