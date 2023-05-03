import { builder } from "@/graphql/builder";

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    email: t.exposeString('email', { nullable: true, }),
    image: t.exposeString('image', { nullable: true, }),
    firstName: t.exposeString('firstName', { nullable: true, }),
    lastName: t.exposeString('lastName', { nullable: true, }),
    role: t.expose('role', { type: Role, }),
  })
})

const Role = builder.enumType('Role', {
  values: ['USER', 'ADMIN'] as const,
})