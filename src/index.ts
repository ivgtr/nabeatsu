import { fool } from "./utils";

export const nabeatsu = (...count: Parameters<typeof fool>): string => fool(...count);
export default nabeatsu;
