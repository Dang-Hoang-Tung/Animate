import { useState } from "react";
import { Button, Container, Group, Title, Box, Center } from "@mantine/core";
import { motion } from "framer-motion";
import {
  generateBubbleSortSteps,
  SortStep,
} from "../../utils/sorting/bubbleSortSteps";

const initialArray = [5, 3, 8, 4, 2];
const steps: SortStep[] = generateBubbleSortSteps(initialArray);

export default function BubbleSortPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  const next = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const prev = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  return (
    <Container>
      <Center my="lg">
        <Title order={2}>Bubble Sort Visualizer</Title>
      </Center>

      <Center my="lg">
        <Group gap="md">
          {step.array.map((num, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  backgroundColor: step.highlight?.includes(idx)
                    ? "#228be6"
                    : "#dee2e6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                {num}
              </Box>
            </motion.div>
          ))}
        </Group>
      </Center>

      <Center>
        <Group>
          <Button onClick={prev} disabled={stepIndex === 0}>
            Previous
          </Button>
          <Button onClick={next} disabled={stepIndex === steps.length - 1}>
            Next
          </Button>
        </Group>
      </Center>
    </Container>
  );
}
