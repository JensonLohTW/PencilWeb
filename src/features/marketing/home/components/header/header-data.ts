import {
    BeakerIcon,
    BoltIcon,
    BuildingOffice2Icon,
    ChartBarIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    CubeTransparentIcon,
    GlobeAltIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/outline'

export interface NavigationItem {
    nameKey: string
    href?: string
    descriptionKey?: string
    icon?: React.ElementType
    type: 'link' | 'dropdown'
    children?: NavigationItem[]
}

export const headerNavigation: NavigationItem[] = [
    {
        nameKey: 'nav.solutions',
        type: 'dropdown',
        children: [
            {
                nameKey: 'footer.solutions.xr',
                descriptionKey: 'footer.solutions.xr', // reusing label as desc for now or add specific desc keys later if needed
                href: '/solutions#xr-training',
                icon: CubeTransparentIcon,
                type: 'link',
            },
            {
                nameKey: 'footer.solutions.ar',
                descriptionKey: 'footer.solutions.ar',
                href: '/solutions#ar-visualization',
                icon: BeakerIcon,
                type: 'link',
            },
            {
                nameKey: 'footer.solutions.iot',
                descriptionKey: 'footer.solutions.iot',
                href: '/solutions#smart-space',
                icon: BuildingOffice2Icon,
                type: 'link',
            },
            {
                nameKey: 'footer.solutions.ai',
                descriptionKey: 'footer.solutions.ai',
                href: '/solutions#ai-for-sme',
                icon: BoltIcon,
                type: 'link',
            },
        ],
    },
    {
        nameKey: 'nav.projects',
        type: 'dropdown',
        children: [
            {
                nameKey: 'footer.projects.simulator',
                descriptionKey: 'footer.projects.simulator',
                href: '/projects#flight-simulator',
                icon: ComputerDesktopIcon,
                type: 'link',
            },
            {
                nameKey: 'footer.projects.training',
                descriptionKey: 'footer.projects.training',
                href: '/projects#flight-training',
                icon: AcademicCapIcon,
                type: 'link',
            },
            {
                nameKey: 'footer.projects.integration',
                descriptionKey: 'footer.projects.integration',
                href: '/projects#data-integration',
                icon: ChartBarIcon,
                type: 'link',
            },
            {
                nameKey: 'footer.projects.agent',
                descriptionKey: 'footer.projects.agent',
                href: '/projects#ai-agent',
                icon: CpuChipIcon,
                type: 'link',
            },
        ],
    },
    {
        nameKey: 'nav.technology',
        href: '/technology',
        type: 'link',
    },
    {
        nameKey: 'nav.about',
        href: '/about',
        type: 'link',
    },
]
