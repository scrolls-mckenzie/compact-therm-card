import { LitElement, TemplateResult, CSSResultGroup } from 'lit';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { CompactThermostatCardConfig } from './types';
export declare class CompactThermostatCardEditor extends LitElement implements LovelaceCardEditor {
    hass: HomeAssistant;
    private _config;
    setConfig(config: CompactThermostatCardConfig): void;
    protected render(): TemplateResult;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        'compact-thermostat-card-editor': CompactThermostatCardEditor;
    }
}
//# sourceMappingURL=compact-thermostat-card-editor.d.ts.map