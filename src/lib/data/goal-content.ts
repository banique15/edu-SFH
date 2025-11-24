export type ObjectiveCategory = "Knowledge" | "Discourse" | "Attitudes" | "Capacity" | "Action";

export interface GoalTargetContent {
	number: string;
	title: string;
	description: string;
	indicators: Array<{
		number: string;
		description: string;
	}>;
}

export interface GoalObjectiveContent {
	category: ObjectiveCategory;
	items: Array<{ description: string; nccas?: string; grade_level?: string | null; id?: number }>;
}

export interface GoalActionSection {
	id?: number;
	title: string;
	items: string[] | Array<{ id?: number; text: string }>;
	description?: string;
}

export interface GoalVideoContent {
	title: string;
	url: string;
	description?: string;
}

export interface GoalStaticContent {
	slug: string;
	goalNumber: number;
	introHeadline?: string;
	introDescription?: string;
	targets: GoalTargetContent[];
	objectives: GoalObjectiveContent[];
	videos?: GoalVideoContent[];
	actionPlanning: {
		statement: string;
		sections: GoalActionSection[];
		grade_level?: string | null;
	} | {
		statement: string;
		sections: GoalActionSection[];
		grade_level?: string | null;
	}[];
}

import { goal1Content } from "./goal-1-content";
import { goal2Content } from "./goal-2-content";
import { goal3Content } from "./goal-3-content";
import { goal4Content } from "./goal-4-content";
import { goal5Content } from "./goal-5-content";
import { goal6Content } from "./goal-6-content";
import { goal7Content } from "./goal-7-content";
import { goal8Content } from "./goal-8-content";
import { goal9Content } from "./goal-9-content";
import { goal10Content } from "./goal-10-content";
import { goal11Content } from "./goal-11-content";
import { goal12Content } from "./goal-12-content";
import { goal13Content } from "./goal-13-content";
import { goal14Content } from "./goal-14-content";
import { goal15Content } from "./goal-15-content";
import { goal16Content } from "./goal-16-content";
import { goal17Content } from "./goal-17-content";

export const goalStaticContent: Record<string, GoalStaticContent> = {
	"goal-1": goal1Content,
	"goal-2": goal2Content,
	"goal-3": goal3Content,
	"goal-4": goal4Content,
	"goal-5": goal5Content,
	"goal-6": goal6Content,
	"goal-7": goal7Content,
	"goal-8": goal8Content,
	"goal-9": goal9Content,
	"goal-10": goal10Content,
	"goal-11": goal11Content,
	"goal-12": goal12Content,
	"goal-13": goal13Content,
	"goal-14": goal14Content,
	"goal-15": goal15Content,
	"goal-16": goal16Content,
	"goal-17": goal17Content
};

export function getGoalStaticContent(slug: string) {
	return goalStaticContent[slug];
}
