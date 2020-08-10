export default class ID {
    private static cnt = 0;

    public static next(): string {
        this.cnt++;
        return `abc-${this.cnt}`;
    }

}
