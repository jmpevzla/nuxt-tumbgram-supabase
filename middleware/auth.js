import isAuth from './shared/isAuth'

export default async function (ctx) {
  const resIsAuth = isAuth(ctx)
  if(!resIsAuth) {
    console.log('NO AUTH :(')
    return ctx.redirect('/login')
  }
  console.log('AUTH!!')
}

