export const useSearchToggle = () =>
    useState<boolean>("isSearchActive", () => false);
