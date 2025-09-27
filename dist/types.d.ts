import { LovelaceCardConfig } from 'custom-card-helpers';
export interface CompactThermostatCardConfig extends LovelaceCardConfig {
    type: 'custom:compact-thermostat-card';
    entity: string;
    name?: string;
    show_current?: boolean;
    show_target?: boolean;
    step?: number;
    min_temp?: number;
    max_temp?: number;
}
export interface ThermostatState {
    current_temperature: number;
    target_temperature: number;
    hvac_mode: 'heat' | 'cool' | 'auto' | 'off' | 'heat_cool' | 'fan_only' | 'dry';
    hvac_action: 'heating' | 'cooling' | 'idle' | 'off' | 'drying' | 'fan';
    min_temp: number;
    max_temp: number;
    temperature_unit: '°C' | '°F';
    supported_features: number;
}
export interface CardState {
    isUpdating: boolean;
    lastUpdate: Date;
    error?: string;
    config: CompactThermostatCardConfig;
}
//# sourceMappingURL=types.d.ts.map