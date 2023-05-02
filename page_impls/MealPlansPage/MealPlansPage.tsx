import { Tab } from "@headlessui/react";

export function MealPlansPage() {
  return (
    <Tab.Group>
      <Tab.List className="mb-6">
        <TabButton>Calendar View</TabButton>
        <TabButton>List View</TabButton>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>Calendar content</Tab.Panel>
        <Tab.Panel>List content</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
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
