"use client";

import { SubmitHandler, useForm } from "react-hook-form";

const FormEl = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 !w-full"
      >
        <div className="flex flex-row items-start gap-6">
          <div className="flex flex-col items-start gap-1 w-full flex-1">
            <label className="text-white text-sm">Adı</label>
            <input
              placeholder="Ad"
              {...register("name", {
                required: {
                  value: true,
                  message: "Bu alan zorunludur",
                },
              })}
              className="border border-black/30 px-3 py-2 active:border focus:outline-none focus:border w-full bg-[#FAFAFA]"
            />
            {errors.name && (
              <span role="alert" className="text-white text-xs">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start gap-1 w-full flex-1">
            <label className="text-white text-sm">Soyad</label>
            <input
              placeholder="Soyad"
              {...register("surname", {
                required: {
                  value: true,
                  message: "Bu alan zorunludur",
                },
              })}
              className="border border-black/30 px-3 py-2 active:border focus:outline-none focus:border w-full bg-[#FAFAFA]"
            />
            {errors.surname && (
              <span role="alert" className="text-white text-xs">
                {errors.surname.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <label className="text-white text-sm">E-posta</label>
          <input
            type="email"
            placeholder="info@info.com"
            {...register("email", {
              required: {
                value: true,
                message: "Bu alan zorunludur",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Geçerli bir e-posta giriniz",
              },
            })}
            className="border border-black/30 px-3 py-2 active:border focus:outline-none focus:border w-full bg-[#FAFAFA]"
          />
          {errors.email && (
            <span role="alert" className="text-white text-xs">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <label className="text-white text-sm">Mesaj</label>
          <textarea
            rows={5}
            placeholder="Mesaj"
            {...register("subject", {
              required: {
                value: true,
                message: "Bu alan zorunludur",
              },
              minLength: {
                value: 20,
                message: "En az 20 karakterli olmalıdır",
              },
            })}
            className="border border-black/30 px-3 py-2 active:border focus:outline-none focus:border w-full bg-[#FAFAFA]"
          />
          {errors.subject && (
            <span role="alert" className="text-white text-xs">
              {errors.subject.message}
            </span>
          )}
        </div>

        <div>
          <input
            type="submit"
            className="bg-primary border-white/50 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-bg_sec transition duration-200"
          />
        </div>
      </form>
    </>
  );
};

export default FormEl;
