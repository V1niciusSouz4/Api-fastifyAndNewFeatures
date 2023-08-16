import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(usersRepository)
  })
  it('should hash user password upon registration', async () => {
    const { user } = await sut.execute({
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

  it('should not be able to register the same email twice', async () => {
    const email = 'viniciussouzasatos@example.com'

    await sut.execute({
      name: 'Vinícius Souza',
      email,
      password: 'bardufs',
    })

    await expect(() =>
      sut.execute({
        name: 'Vinícius Souza',
        email,
        password: 'bardufs',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
