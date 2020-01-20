export class TutorialDetails {
    name: string;
    order: number;
    description: string;
    longDescription: string;
    materials: string[];
    steps: TutorialSteps[];
}

export class TutorialSteps {
    image: string;
    caption: string;
    description: string;
}
