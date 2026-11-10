---
title: "API ທີ່ມີໃຫ້ໃນ React"
---

<Intro>

ນອກຈາກ [Hooks](/reference/react) ແລະ [Components](/reference/react/components) ແລ້ວ package `react` ຍັງ export API ອື່ນໆ ທີ່ມີປະໂຫຍດຕໍ່ການສ້າງ component. ໜ້ານີ້ລວບລວມ API ສະໄໝໃໝ່ຂອງ React ທີ່ເຫຼືອ.

</Intro>

---

* [`createContext`](/reference/react/createContext) ຊ່ວຍກຳນົດ context ແລະ ສົ່ງຂໍ້ມູນໃຫ້ component ລູກ. ໃຊ້ຄູ່ກັບ [`useContext`.](/reference/react/useContext)
* [`forwardRef`](/reference/react/forwardRef) ຊ່ວຍໃຫ້ component ສົ່ງ DOM node ຜ່ານ ref ໄປໃຫ້ component ແມ່. ໃຊ້ຄູ່ກັບ [`useRef`.](/reference/react/useRef)
* [`lazy`](/reference/react/lazy) ຊ່ວຍເລື່ອນການໂຫຼດ code ຂອງ component ຈົນກວ່າ component ນັ້ນຈະຖືກ render ຄັ້ງທຳອິດ.
* [`memo`](/reference/react/memo) ຊ່ວຍໃຫ້ component ຂ້າມການ render ຊ້ຳເມື່ອ props ບໍ່ປ່ຽນແປງ. ໃຊ້ຄູ່ກັບ [`useMemo`](/reference/react/useMemo) ແລະ [`useCallback`.](/reference/react/useCallback)
* [`startTransition`](/reference/react/startTransition) ຊ່ວຍລະບຸວ່າການອັບເດດ state ນັ້ນບໍ່ແມ່ນວຽກເລັ່ງດ່ວນ. ມີລັກສະນະຄ້າຍກັບ [`useTransition`.](/reference/react/useTransition)
