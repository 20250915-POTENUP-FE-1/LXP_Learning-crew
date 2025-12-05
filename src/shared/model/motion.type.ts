import { TargetAndTransition, VariantLabels } from "motion";
import { MotionStyle, Transition as MotionTransition } from "motion/react";

type Style = MotionStyle | undefined;
type Initial = boolean | TargetAndTransition | VariantLabels | undefined;
type Animate = boolean | TargetAndTransition | VariantLabels | undefined;
type Exit = TargetAndTransition | VariantLabels | undefined;
type Transition = MotionTransition<any> | undefined;

export type { Style, Initial, Animate, Exit, Transition };
