import { useState } from "react";
import { View } from "react-native";

import { Container, Form } from "./styles";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Options } from "@components/Options";
import { SecondaryHeader } from "@components/SecondaryHeader";

export const EditMeal = () => {
  const [option, setOption] = useState<"inside" | "out" | "">("");

  const changeOption = (option: "inside" | "out" | "") => {
    setOption(option);
  };

  return (
    <Container>
      <SecondaryHeader title="Editar refeição" />

      <Form>
        <Input title="Nome" />
        <Input title="Descrição" height="2x" />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Input title="Data" width="0.5x" />
          <Input title="Hora" width="0.5x" />
        </View>

        <Options changeOption={changeOption} option={option} />

        <Button
          title="Editar refeição"
          style={{ width: "100%", marginTop: "auto" }}
        />
      </Form>
    </Container>
  );
};
