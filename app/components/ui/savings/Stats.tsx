import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

export function Stats() {
  return (
    <StatGroup className="w-fit flex gap-20">
      <Stat>
        <StatLabel>Savings</StatLabel>
        <StatNumber>£455.00</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          23.36%
        </StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Expenses</StatLabel>
        <StatNumber>£103.00</StatNumber>
        <StatHelpText>
          <StatArrow type="decrease" />
          9.05%
        </StatHelpText>
      </Stat>
    </StatGroup>
  );
}
