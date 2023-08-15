import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists'

describe('Register User Password Case', () => {
  it('should hash user password upon registration', async () => {
    const registerUseCase = new RegisterUseCase({
      async findByEmail(email) {
        return null
      },

      async create(data) {
        return {
          id: 'user-1',
          name: data.name,
          email: data.email,
          password_hash: data.password_hash,
          created_at: new Date(),
        }
      },
    })

    const { user } = await registerUseCase.execute({
      name: 'Vinícius Souza',
      email: 'viniciussouzasatos@example.com',
      password: 'bardufs',
    })

    const isPasswordCorrectlyHashed = await compare(
      'bardufs',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const usersRepository = new InMemoryUsersRepository()
    const registerUseCase = new RegisterUseCase(usersRepository)

    const email = 'viniciussouzasatos@example.com'

    await registerUseCase.execute({
      name: 'Vinícius Souza',
      email,
      password: 'bardufs',
    })

    expect(() =>
      registerUseCase.execute({
        name: 'Vinícius Souza',
        email,
        password: 'bardufs',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
