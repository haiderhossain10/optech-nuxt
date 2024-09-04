export const useSearchToggle = () =>
    useState<boolean>("isSearchActive", () => false);

export const useHeaderSidebarToggle = () =>
    useState<boolean>("isHeaderSidebarActive", () => false);
