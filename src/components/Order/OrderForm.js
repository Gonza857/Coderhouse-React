import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../storage/CartContext.js";
import OrderItem from "./OrderItem.js";
import { postOrder } from "../../firebase/firebase";
import Swal from "sweetalert2";
import { LeapFrog } from "@uiball/loaders";
import styled from "styled-components";
import Button from "../Button/Button.js";

function OrderForm() {
  const navigate = useNavigate();
  const { cart, totalCartPrice, setCart } = useContext(cartContext);
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
      Swal.fire({
        allowOutsideClick: false,
        icon: "success",
        title: "Se realizó el pedido correctamente.",
        text: `Se envió a tu correo electrónico los datos de la orden N° ${respuesta}`,
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([]);
          navigate("/");
        }
      });
    });
    reset();
  };

  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <LeapFrog size={40} speed={2.5} color={"red"} />
        </LoaderContainer>
      ) : (
        <OrderFormWrapper>
          <OrderFormContainer onSubmit={handleSubmit(onSubmit)}>
            <FormSection>
              <OrderFormLabel htmlFor="userName">
                Ingresa tu nombre
              </OrderFormLabel>
              <OrderFormInput
                placeholder="Nombre"
                type="text"
                name="userName"
                aria-invalid={errors.userName ? "true" : "false"}
                {...register("userName", {
                  required: true,
                })}
              />
              {errors.userName?.type === "required" && (
                <FormAlertText role="alert">Campo requerido</FormAlertText>
              )}
            </FormSection>

            <FormSection>
              <OrderFormLabel htmlFor="userNumber">
                Ingresa teléfono
              </OrderFormLabel>
              <OrderFormInput
                placeholder="Teléfono"
                type="number"
                name="userNumber"
                aria-invalid={errors.userNumber ? "true" : "false"}
                {...register("userNumber", {
                  required: true,
                })}
              />
              {errors.userNumber?.type === "required" && (
                <FormAlertText role="alert">Campo requerido</FormAlertText>
              )}
            </FormSection>

            <FormSection>
              <OrderFormLabel htmlFor="userMail">Ingresa e-mail</OrderFormLabel>
              <OrderFormInput
                placeholder="Correo electrónico"
                type="mail"
                name="userMail"
                aria-invalid={errors.userMail ? "true" : "false"}
                {...register("userMail", {
                  required: true,
                  // pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.userMail?.type === "required" && (
                <FormAlertText role="alert">Campo requerido</FormAlertText>
              )}
              {errors.userMail?.type === "pattern" && (
                <FormAlertText role="alert">
                  El formato del email es incorrecto
                </FormAlertText>
              )}
            </FormSection>
            <p>Total a pagar: ${totalCartPrice()}</p>
            <Button type="submit">Enviar pedido</Button>
          </OrderFormContainer>
          <div className="formItems">
            {cart.map((item) => {
              return <OrderItem item={item} key={item.id} />;
            })}
          </div>
        </OrderFormWrapper>
      )}
    </>
  );
}

export default OrderForm;

const OrderFormWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  .formItems {
    width: 65%;
    padding: 0;
  }
`;

const OrderFormContainer = styled.form`
  margin: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0.5px solid #c7c7c7;
  border-radius: 20px;
  padding: 10px;
  p {
    font-weight: 600;
    text-align: center;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
`;

const OrderFormLabel = styled.label`
  margin-bottom: 7px;
`;

const OrderFormInput = styled.input`
  outline: none;
  background-color: transparent;
  padding: 7px 10px;
  border: 1px solid #c7c7c7;
  &:focus {
    border: 1px solid red;
  }
`;

const FormAlertText = styled.small`
  color: red;
`;

const LoaderContainer = styled.div`
  height: calc(100vh - 120px);
  display: grid;
  align-items: center;
  justify-content: center;
`;
