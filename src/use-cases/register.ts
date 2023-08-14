import { prisma } from '@/lib/prisma'
import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 10)

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (userWithSameEmail) throw new Error('Email already exists!')

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
