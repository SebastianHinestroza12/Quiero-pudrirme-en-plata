// global.d.ts
declare module "use-sound" {
  const useSound: (
    src: string | string[],
    options?: object,
  ) => [() => void, any];
  export default useSound;
}
