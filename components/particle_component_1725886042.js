<!--
INSTRUCTION: Summary: This is a canvas element for displaying a purple glow and a particle animation in the background of the hero component.
-->

<template>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <div class="bg-gray-100 min-h-screen p-8">
        <div class="max-w-7xl mx-auto">
            <h1 class="text-4xl font-bold mb-8 text-purple-600">DeFi Dashboard</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Total Value Locked -->
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h2 class="text-xl font-semibold mb-4 flex items-center">
                        <i class='bx bx-lock-alt text-purple-500 mr-2'></i>
                        Total Value Locked
                    </h2>
                    <p class="text-3xl font-bold text-purple-600">$10,234,567,890</p>
                </div>
                <!-- Available Liquidity -->
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h2 class="text-xl font-semibold mb-4 flex items-center">
                        <i class='bx bx-dollar-circle text-green-500 mr-2'></i>
                        Available Liquidity
                    </h2>
                    <p class="text-3xl font-bold text-green-600">$5,678,901,234</p>
                </div>
                <!-- Total Borrowed -->
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h2 class="text-xl font-semibold mb-4 flex items-center">
                        <i class='bx bx-trending-up text-blue-500 mr-2'></i>
                        Total Borrowed
                    </h2>
                    <p class="text-3xl font-bold text-blue-600">$4,567,890,123</p>
                </div>
            </div>
            <!-- Assets Table -->
            <div class="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
                <h2 class="text-2xl font-semibold p-6 bg-purple-600 text-white">Assets</h2>
                <table class="w-full">
                    <thead class="bg-purple-100">
                        <tr>
                            <th class="p-4 text-left">Asset</th>
                            <th class="p-4 text-left">Market Size</th>
                            <th class="p-4 text-left">Total Borrowed</th>
                            <th class="p-4 text-left">Deposit APY</th>
                            <th class="p-4 text-left">Borrow APY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b">
                            <td class="p-4 flex items-center">
                                <i class='bx bxl-ethereum text-purple-500 mr-2'></i>
                                ETH
                            </td>
                            <td class="p-4">$2,345,678,901</td>
                            <td class="p-4">$1,234,567,890</td>
                            <td class="p-4 text-green-600">2.5%</td>
                            <td class="p-4 text-red-600">3.2%</td>
                        </tr>
                        <tr class="border-b">
                            <td class="p-4 flex items-center">
                                <i class='bx bxl-bitcoin text-orange-500 mr-2'></i>
                                BTC
                            </td>
                            <td class="p-4">$3,456,789,012</td>
                            <td class="p-4">$2,345,678,901</td>
                            <td class="p-4 text-green-600">1.8%</td>
                            <td class="p-4 text-red-600">2.7%</td>
                        </tr>
                        <tr>
                            <td class="p-4 flex items-center">
                                <i class='bx bx-dollar text-green-500 mr-2'></i>
                                USDC
                            </td>
                            <td class="p-4">$4,567,890,123</td>
                            <td class="p-4">$3,456,789,012</td>
                            <td class="p-4 text-green-600">3.1%</td>
                            <td class="p-4 text-red-600">3.8%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardComponent",
    data() {
        return {
            // Add any reactive data here if needed
        };
    },
    methods: {
        // Add any methods here if needed
    }
};
</script>
