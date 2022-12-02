import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../storage/CartContext.js";
import OrderItem from "./OrderItem.js";
import { postOrder } from "../../firebase/firebase";
import Swal from "sweetalert2";
import "./order.css";
import { LeapFrog } from "@uiball/loaders";

function OrderForm() {
  const navigate = useNavigate();
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);
  const { cart, clearCart, totalCartPrice, isCartEmpty } =
    useContext(cartContext);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    const order = {
      buyer: {
        name: data.userName,
        number: data.userNumber,
        mail: data.userMail,
      },
      items: [...cart],
    };
    postOrder(order).then((respuesta) => {
      setIsLoading(false);
      setOrderInfo(respuesta);
      navigate("/");
      Swal.fire({
        allowOutsideClick: false,
        icon: "success",
        title: "Se realizó el pedido correctamente.",
        text: `Se envió a tu correo electrónico los datos de la orden N° ${respuesta}`,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart();
          navigate("/");
        }
      });
    });
    reset();
    setIsOrderCompleted(true);
  };

  console.log("tarazca")

  return (
    <>
      {isLoading ? (
        <LeapFrog size={40} speed={2.5} color={"red"} />
      ) : (
        <div className="order-container">
          <div className="order-form-wrapper">
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="order-form_name">
                <input
                  defaultValue="gon"
                  type="text"
                  //   placeholder="Nombre"
                  name="userName"
                  aria-invalid={errors.userName ? "true" : "false"}
                  {...register("userName", {
                    required: true,
                  })}
                />
                {errors.userName?.type === "required" && (
                  <small role="alert">Campo requerido</small>
                )}
              </div>

              <div className="order-form_number">
                <input
                  defaultValue="123"
                  type="number"
                  //   placeholder="Número"
                  name="userNumber"
                  aria-invalid={errors.userNumber ? "true" : "false"}
                  {...register("userNumber", {
                    required: true,
                  })}
                />
                {errors.userNumber?.type === "required" && (
                  <small role="alert">Campo requerido</small>
                )}
              </div>

              <div className="order-form_mail">
                <input
                  defaultValue="gon@gon.gon"
                  type="mail"
                  //   placeholder="Correo electrónico"
                  name="userMail"
                  aria-invalid={errors.userMail ? "true" : "false"}
                  {...register("userMail", {
                    required: true,
                    // pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                />
                {errors.userMail?.type === "required" && (
                  <small role="alert">Campo requerido</small>
                )}
                {errors.userMail?.type === "pattern" && (
                  <small role="alert">El formato del email es incorrecto</small>
                )}
              </div>
              <p>Total a pagar: ${totalCartPrice()}</p>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="formItems">
            {cart.map((item) => {
              return <OrderItem item={item} key={item.id} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default OrderForm;
