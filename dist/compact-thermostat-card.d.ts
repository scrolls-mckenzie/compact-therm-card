import { LitElement, TemplateResult, CSSResultGroup, PropertyValues } from 'lit';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { CompactThermostatCardConfig, ThermostatState } from './types';
export declare class CompactThermostatCard extends LitElement {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): Partial<CompactThermostatCardConfig>;
    hass: HomeAssistant;
    private config;
    private cardState;
    private tempAdjustmentFeedback;
    private screenSize;
    private cardWidth;
    private _unsubscribeEntity?;
    private _retryTimeout?;
    private _resizeObserver?;
    setConfig(config: CompactThermostatCardConfig): void;
    getCardSize(): number;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get entityState();
    private validateEntity;
    private _handleHassUpdate;
    private _handleConfigUpdate;
    private _handleEntityStateChange;
    private _subscribeToEntityUpdates;
    private _unsubscribeFromEntityUpdates;
    private _scheduleRetry;
    private _clearRetryTimeout;
    setTargetTemperature(temperature: number): Promise<void>;
    setHvacMode(mode: ThermostatState['hvac_mode']): Promise<void>;
    adjustTemperature(delta: number): Promise<void>;
    cycleHvacMode(): Promise<void>;
    private _getAvailableHvacModes;
    private _scheduleServiceRetry;
    private _getModeIcon;
    private _getModeDisplayName;
    private _getModeColor;
    private _formatTemperature;
    private _getConnectionStatus;
    private _getActivityClass;
    private _renderActivityIndicator;
    private _handleModeClick;
    private _handleTempIncrease;
    private _handleTempDecrease;
    private _handleTouchStart;
    private _handleKeyDown;
    private _showTempAdjustmentFeedback;
    private _clearTempAdjustmentFeedback;
    private _setupResponsiveObserver;
    private _cleanupResponsiveObserver;
    private _detectScreenSize;
    private _updateResponsiveState;
    private _handleOrientationChange;
    private _handleWindowResize;
    private _getResponsiveClasses;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        'compact-thermostat-card': CompactThermostatCard;
    }
}
//# sourceMappingURL=compact-thermostat-card.d.ts.map