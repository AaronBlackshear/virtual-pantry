import { Calendar } from "@/components/Calendar";
import { MealPlanList } from "@/page_impls/MealPlansPage/MealPlanList";
import { Tab } from "@headlessui/react";

export function MealPlansPage() {
  return (
    <div className="flex flex-col h-full">
      <Tab.Group>
        <Tab.List className="mb-6">
          <TabButton>Calendar View</TabButton>
          <TabButton>List View</TabButton>
        </Tab.List>

        <Tab.Panels className="flex-1 h-full">
          <Tab.Panel className="h-full">
            <Calendar />
          </Tab.Panel>
          <Tab.Panel className="h-full">
            <MealPlanList />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

interface TabButtonProps {
  children: React.ReactNode;
}

function TabButton({ children }: TabButtonProps) {
  return (
    <Tab className="px-3 py-4 pb-3 button-md text-gray-3 border-b-blue-3 border-b-0 transition-colors outline-none ui-selected:text-blue-3 ui-selected:border-b-[3px] hover:text-blue-3 focus:bg-gray-11">
      {children}
    </Tab>
  )
}
