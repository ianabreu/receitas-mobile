import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { Typography } from "../../components/ui/Typography";
import { Container } from "../../components/layout/Container";

export default function Step1() {
  return (
    <Container>
      <Typography content="Step 1" variant="title" />
    </Container>
  );
}
