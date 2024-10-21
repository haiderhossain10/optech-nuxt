import type { ShopType } from "~/types/types";

export const useSearchToggle = () =>
    useState<boolean>("isSearchActive", () => false);

export const useHeaderSidebarToggle = () =>
    useState<boolean>("isHeaderSidebarActive", () => false);

export const useShop = () =>
    useState<ShopType[]>("shop", () => [
        {
            id: 1,
            imgUrl: "/assets/images/shop/shop01.png",
            title: "Black Headphone",
            price: 39,
            offerPrice: 29,
            isSell: true,
            qty: 1,
        },
    ]);
