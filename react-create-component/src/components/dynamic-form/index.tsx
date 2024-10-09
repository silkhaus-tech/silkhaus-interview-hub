import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ZodType, z } from "zod";

export type FormField = {
  name: string
  type: 'text' | 'select'
  options?: {
    label: string,
    value: string
  }[]
  label: string
}

export type FormData = {
  [key: string]: string
}

export type DynamicFormProps = {
  fields: FormField[],
  onSubmit: (formData: FormData) => void,
  isLoading?: boolean
}

export const DynamicForm: FC<DynamicFormProps> = ({ fields, onSubmit, isLoading }: DynamicFormProps) => {
  const [zodSchema, setZodSchema] = useState<ZodType>()

  useEffect(() => {
    if (!fields) return
    const schema = z.object(
      fields?.reduce<Record<string, z.ZodTypeAny>>((acc, item) => {
        if (item.type === "text") {
          acc[item.name] = z.string().min(1, { message: `${item.label} required!` })
        }
        else if (item.type === "select") {
          acc[item.name] = z.string().min(1, { message: `${item.label} required!` })
        }
        return acc
      }, {}))
    setZodSchema(schema)
  }, [fields])

  const onSend: SubmitHandler<z.infer<ZodType>> = (data) => {
    onSubmit(data)
  }

  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<ZodType>>({
    mode: 'all',
    resolver: zodSchema ? zodResolver(zodSchema) : undefined
  })

  return (
    <div>
      <h3>Person information</h3>
      <form onSubmit={handleSubmit(onSend)}>

        {
          fields && fields.map((item, index) => (
            <div key={index}>
              {item.type && item.type === 'text' && (
                <div>
                  <input placeholder={item.label} {...register(item.name)} disabled={isLoading} />
                  {errors[item.name] && <p>{errors[item.name]?.message as string}</p>}
                </div>
              )}

              {item.type && item.type === 'select' && (
                <div>
                  <select {...register(item.name)} disabled={isLoading}>
                    {
                      item.options?.map((g, i) => (
                        <option value={g.value} key={i}>{g.label}</option>
                      ))
                    }
                  </select>
                  {errors[item.name] && <p>{errors[item.name]?.message as string}</p>}
                </div>
              )}
            </div>
          ))
        }
        <button type="submit" disabled={isLoading}>Submit</button>
      </form>

    </div>
  )
};