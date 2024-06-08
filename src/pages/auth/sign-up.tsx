import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignUpForm = z.object({
  email: z.string().email(),
  restauranteName: z.string(),
  managerName: z.string(),
  phone: z.string(),
})

type SignUpForm = z.infer<typeof SignUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    console.log('Form Data', data)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso')
      navigate('/sign-in')
    } catch {
      toast.success('Erro ao cadastrar estabelecimento')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="secondary" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta
            </h1>
            <p className="text-sn text-muted-foreground">
              Seja um parceiro e comece suas vendas
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restauranteName">Nome do estabelcimento</Label>
              <Input
                type="text"
                id="restauranteName"
                {...register('restauranteName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                type="text"
                id="managerName"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-email</Label>
              <Input type="email" id="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contato</Label>
              <Input type="text" id="contact" {...register('email')} />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>
            <p className="text-muted-fore px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, voce concorda com nossos{' '}
              <a className="underline underline-offset-4" href="#">
                Termos de servico
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="#">
                politicas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
