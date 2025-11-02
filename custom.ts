//% color="#25567D"
//% icon="\uf0a3"
namespace events {
    export enum EnchantmentProperty {
        //% block="タイプ"
        Type,
        //% block="レベル"
        Level
    }

    export enum MessageType {
        //% block="チャット"
        Chat,
        //% block="言う"
        Say,
        //% block="ささやく"
        Tell
    }

    /**
     * ブロックが壊されたときにコードを実行します。
     *
     * @param block 壊されたブロック
     * @param tool ブロックを壊すのに使われた道具 (道具が使われなかった場合は -1)
     * @param count 壊されたブロックの数
     */
    //% blockId=events_onBlockBroken
    //% blockAliasFor="events.onBlockBroken"
    //% block="$block が $tool で $count 個 壊されたとき"
    //% draggableParameters="reporter"
    //% group="Blocks"
    //% weight=100 help=events/on-block-broken
    export function _onBlockBroken(handler: (block: number, tool: number, count: number) => void) {
        events.onBlockBroken(handler);
    }

    /**
     * ブロックが置かれたときにコードを実行します。
     *
     * @param block 置かれたブロック
     * @param tool ブロックを置くのに使われた道具
     * @param count 置かれたブロックの数
     * @param method ブロックが置かれた方法
     */
    //% blockId=events_onBlockPlaced
    //% blockAliasFor="events.onBlockPlaced"
    //% block="$block が $tool で $count 個 $method で 置かれたとき"
    //% draggableParameters="reporter"
    //% group="Blocks"
    //% weight=90 help=events/on-block-placed
    //% blockGap=8
    export function _onBlockPlaced(handler: (block: number, tool: number, count: number, method: BlockPlacementMethod) => void) {
        events.onBlockPlaced(handler);
    }

    /**
     * ブロックを置く方法。「ブロックが置かれたとき」イベントで使います。
     */
    //% shim=TD_ID
    //% blockId=events_blockPlacementMethod
    //% block="ブロックが置かれた方法 $method"
    //% group="Blocks"
    //% weight=85 help=events/block-placement-method
    export function _blockPlacementMethod(method: BlockPlacementMethod): number {
        return method;
    }

    /**
     * ゲーム内で1日の終わり（日没）になったときにコードを実行します。
     */
    //% blockId=events_onEndOfDay
    //% blockAliasFor="events.onEndOfDay"
    //% block="1日の終わりのとき"
    //% draggableParameters="reporter"
    //% group="Gameplay"
    //% weight=100 help=events/on-end-of-day
    export function _onEndOfDay(handler: () => void) {
        events.onEndOfDay(handler);
    }

    /**
     * アイテムが使われたときにコードを実行します。
     *
     * トリガーの例:
     * クワで土を耕したとき
     * バケツから水を空けたとき
     *
     * @param item 使われたアイテム
     * @param method アイテムが使われた方法（例：「道具の使用」「バケツを空にする」など）
     */
    //% blockId=events_onItemUsed
    //% blockAliasFor="events.onItemUsed"
    //% block="$item が $method で 使われたとき"
    //% draggableParameters="reporter"
    //% group="Items"
    //% weight=100 help=events/on-item-used
    //% blockGap=8
    export function _onItemUsed(handler: (item: number, method: string) => void) {
        events.onItemUsed(handler);
    }

    /**
     * アイテムを使う方法。「アイテムが使われたとき」イベントで使います。
     */
    //% blockId=events_useMethod
    //% block="アイテムの使用方法 $method"
    //% group="Items"
    //% weight=95 help=events/use-method
    export function useMethod(method: UseMethod): string {
        return useMethodToString(method);
    }

    /**
     * プレイヤーがアイテムを入手した（拾った）ときにコードを実行します。
     *
     * トリガーの例:
     * 誰かが捨てたアイテムのスタックを拾ったとき
     * 採掘した丸石を拾ったとき
     *
     * @param item 入手したアイテム
     * @param count 入手したアイテムの数
     * @param method アイテムを入手した方法
     */
    //% blockId=events_onItemAcquired
    //% blockAliasFor="events.onItemAcquired"
    //% block="$item を $count 個 $method で 入手したとき"
    //% draggableParameters="reporter"
    //% group="Items"
    //% weight=90 help=events/on-item-acquired
    //% blockGap=8
    export function _onItemAcquired(handler: (item: number, count: number, method: AcquisitionMethod) => void) {
        events.onItemAcquired(handler);
    }

    /**
     * アイテムを入手する方法。「アイテムを入手したとき」イベントで使います。
     */
    //% shim=TD_ID
    //% blockId=events_acquisitionMethod
    //% block="アイテムの入手方法 $method"
    //% group="Items"
    //% weight=85 help=events/acquisition-method
    export function _acquisitionMethod(method: AcquisitionMethod): number {
        return method;
    }

    /**
     * アイテムがクラフトされたときにコードを実行します。このイベントは現在アクティブではありません。
     */
    export function _onItemCrafted(handler: (item: number, count: number) => void) {
        events.onItemCrafted(handler);
    }

    /**
     * プレイヤーがアイテムを捨てた（ドロップした）ときにコードを実行します。
     *
     * トリガーの例:
     * インベントリからアイテムを捨てたとき
     * Qキーを押して装備中のアイテムを捨てたとき
     *
     * @param item 捨てられたアイテム
     * @param count 捨てられたアイテムの数
     */
    //% blockId=events_onItemDropped
    //% blockAliasFor="events.onItemDropped"
    //% block="$item が $count 個 捨てられたとき"
    //% draggableParameters="reporter"
    //% group="Items"
    //% weight=80 help=events/on-item-dropped
    export function _onItemDropped(handler: (item: number, count: number) => void) {
        events.onItemDropped(handler);
    }

    /**
     * プレイヤーがアイテムを鎧スロットまたはオフハンドスロットに装備したときにコードを実行します。
     *
     * トリガーの例:
     * （Fキーを押して）盾をオフハンドスロットに持ったとき
     * 鉄のレギンスを履いたとき
     *
     * @param item 装備されたアイテム
     * @param slot アイテムが装備されたスロット
     * @param enchantments 装備されたアイテムが持つエンチャントの配列
     */
    //% blockId=events_onItemEquipped
    //% blockAliasFor="events.onItemEquipped"
    //% block="$item が $slot に $enchantments 付きで 装備されたとき"
    //% draggableParameters="reporter"
    //% group="Items"
    //% weight=70 help=events/on-item-equipped
    //% blockGap=8
    export function _onItemEquipped(handler: (item: number, slot: number, enchantments: Enchantment[]) => void) {
        events.onItemEquipped(handler);
    }

    /**
     * エンチャントの名前を取得します。
     *
     * @param enchantment 名前を取得するエンチャント
     */
    //% blockId=events_enchantmentName
    //% block="$enchantment の名前"
    //% enchantment.shadow=variables_get
    //% enchantment.defl=myEnchantment
    //% group="Items"
    //% weight=67 help=events/enchantment-name
    //% blockGap=8
    export function enchantmentName(enchantment: Enchantment): string {
        return enchantment.name;
    }

    /**
     * エンチャントのレベルまたはタイプを取得します。
     *
     * @param enchantment レベルまたはタイプを取得するエンチャント
     */
    //% blockId=events_enchantmentProperty
    //% block="$enchantment の $property"
    //% enchantment.shadow=variables_get
    //% enchantment.defl=myEnchantment
    //% group="Items"
    //% weight=65 help=events/enchantment-property
    export function enchantmentProperty(enchantment: Enchantment, property: EnchantmentProperty): number {
        if (property === EnchantmentProperty.Type) {
            return enchantment.type
        }
        return enchantment.level;
    }

    /**
     * アイテムが操作されたときにコードを実行します。
     *
     * トリガーの例:
     * レバーをオンにしたとき
     * ブロックを置いたとき
     *
     * 注意: 感圧板を踏んでもこのイベントはトリガーされません！
     *
     * @param item 操作されたアイテム
     * @param count 操作されたアイテムの数
     * @param method アイテムが操作された方法
     */
    //% blockId=events_onItemInteracted
    //% blockAliasFor="events.onItemInteracted"
    //% block="$item が $count 個 $method で 操作されたとき"
    //% draggableParameters="reporter"
    //% group="Items"
    //% weight=50 help=events/on-item-interacted
    //% blockGap=8
    export function _onItemInteracted(handler: (item: number, count: number, method: ItemInteractMethod) => void) {
        events.onItemInteracted(handler);
    }

    /**
     * アイテムを操作する方法。「アイテムが操作されたとき」イベントで使います。
     */
    //% shim=TD_ID
    //% blockId=events_itemInteractMethod
    //% block="アイテムの操作方法 $method"
    //% group="Items"
    //% weight=45 help=events/item-interact-method
    export function _itemInteractMethod(method: ItemInteractMethod): number {
        return method;
    }

    /**
     * アイテムがかまどで精錬され、取り出されたときにコードを実行します。
     *
     * トリガーの例:
     * 鉄鉱石をかまどで精錬し、出来上がった鉄インゴットを取り出したとき
     *
     * @param item かまどから取り出されたアイテム
     * @param fuelSource アイテムを精錬するのに使われた燃料
     */
    //% blockId=events_onItemSmelted
    //% blockAliasFor="events.onItemSmelted"
    //% block="$item が $fuelSource で 精錬されたとき"
    //% draggableParameters="reporter"
    //% group="Items"
    //% blockHidden=true
    //% weight=40 help=events/on-item-smelted
    export function _onItemSmelted(handler: (item: number, fuelSource: number) => void) {
        events.onItemSmelted(handler);
    }

    /**
     * カメラが使われたときにコードを実行します。
     *
     * @param isSelfie カメラが自撮り（セルフィー）に使われた場合は true、それ以外は false
     */
    //% blockId=events_onCameraUsed
    //% blockAliasFor="events.onCameraUsed"
    //% block="カメラが使われたとき $isSelfie"
    //% draggableParameters="reporter"
    //% group="Items"
    //% weight=30 help=events/on-camera-used
    export function _onCameraUsed(handler: (isSelfie: boolean) => void) {
        events.onCameraUsed(handler);
    }

    /**
     * Mob が倒されたときにコードを実行します。
     *
     * トリガーの例:
     * 剣を使ってゾンビを倒したとき
     * 豚を崖から突き落として倒したとき
     *
     * @param mob 倒された Mob
     * @param weapon Mob を倒すのに使われた武器 (武器が使われなかった場合は -1)
     * @param isMonster 倒された Mob がモンスターの場合は true、それ以外は false
     */
    //% blockId=events_onMobKilled
    //% blockAliasFor="events.onMobKilled"
    //% block="$mob が $weapon で 倒されたとき $isMonster"
    //% draggableParameters="reporter"
    //% group="Mobs"
    //% weight=100 help=events/on-mob-killed
    export function _onMobKilled(handler: (mob: number, weapon: number, isMonster: boolean) => void) {
        events.onMobKilled(handler);
    }

    /**
     * 新しいエンティティ (Mob) がスポーンした（出現した）ときにコードを実行します。
     *
     * トリガーの例:
     * 「ウシをスポーン」のようなスポーンエッグを使って Mob を出現させたとき
     * 「summon」コマンドを使って Mob を召喚したとき
     *
     * @param mob スポーンした Mob
     * @param spawner Mob がスポーンした方法（例：「不明」「スポーンエッグ」「コマンド」「ディスペンサー」「スポナー」）
     */
    //% blockId=events_onEntitySpawned
    //% blockAliasFor="events.onEntitySpawned"
    //% block="$mob が $spawner で スポーンしたとき"
    //% draggableParameters="reporter"
    //% group="Mobs"
    //% weight=90 help=events/on-entity-spawned
    //% blockGap=8
    export function _onEntitySpawned(handler: (mob: number, spawner: string) => void) {
        events.onEntitySpawned(handler);
    }

    /**
     * エンティティ (Mob) を出現させる方法。「エンティティ/Mob がスポーンしたとき」イベントで使います。
     */
    //% blockId=events_spawnerMethod
    //% block="エンティティのスポーン方法 $method"
    //% group="Mobs"
    //% weight=85 help=events/spawner-method
    export function spawnerMethod(method: MobSpawnMethod): string {
        return mobSpawnMethodToString(method);
    }

    /**
     * プレイヤーがバウンドした（跳ねた）ときにコードを実行します。
     *
     * トリガーの例:
     * スライムブロックの上で跳ねたとき
     * ベッドブロックの上で跳ねたとき
     *
     * @param height プレイヤーが跳ねた高さ
     * @param block プレイヤーがバウンドしたブロック
     */
    //% blockId=events_onPlayerBounced
    //% blockAliasFor="events.onPlayerBounced"
    //% block="プレイヤーが $block で $height バウンドしたとき"
    //% draggableParameters="reporter"
    //% group="Player"
    //% weight=100 help=events/on-player-bounced
    export function _onPlayerBounced(handler: (height: number, block: number) => void) {
        events.onPlayerBounced(handler);
    }

    /**
     * プレイヤーが死亡したときにコードを実行します。
     *
     * トリガーの例:
     * プレイヤーがクリーパーに爆破されたとき
     * プレイヤーが高い所から落ちたとき
     *
     * @param cause 死亡の原因（例：溶岩、窒息など）
     * @param mob 死亡の原因となった Mob (Mob が関与していない場合は -1)
     */
    //% blockId=events_onPlayerDied
    //% blockAliasFor="events.onPlayerDied"
    //% block="プレイヤーが $cause で $mob によって 死亡したとき"
    //% draggableParameters="reporter"
    //% group="Player"
    //% weight=90 help=events/on-player-died
    //% blockGap=8
    export function _onPlayerDied(handler: (cause: string, mob: number) => void) {
        events.onPlayerDied(handler);
    }

    /**
     * プレイヤーの死亡原因。「プレイヤーが死亡したとき」イベントで使います。
     */
    //% blockId=events_deathCause
    //% block="死亡原因 $method"
    //% group="Player"
    //% weight=85 help=events/death-cause
    export function deathCause(method: ActorDamageCause) {
        return actorDamageCauseToString(method);
    }

    /**
     * プレイヤーがメッセージを送信したときにコードを実行します。
     *
     * トリガーの例:
     * 「msg」コマンドを使ったとき
     * ゲーム内でタイトルを表示したとき
     *
     * @param message 送信されたメッセージ
     * @param sender メッセージを送信したプレイヤーの名前
     * @param receiver メッセージを受信したプレイヤーの名前（特定のプレイヤー宛てでない場合は空の文字列）
     * @param messageType メッセージの種類（例：「チャット」「言う」「ささやく」）
     */
    //% blockId=events_onPlayerMessage
    //% blockAliasFor="events.onPlayerMessage"
    //% block="$message が $sender から $receiver へ $messageType で 送信されたとき"
    //% draggableParameters="reporter"
    //% group="Player"
    //% weight=80 help=events/on-player-message
    //% blockGap=8
    export function _onPlayerMessage(handler: (message: string, sender: string, receiver: string, messageType: string) => void) {
        events.onPlayerMessage(handler);
    }

    /**
     * プレイヤーが送信できるメッセージの種類。「メッセージが送信されたとき」イベントで使います。
     */
    //% blockId=events_messageType
    //% block="メッセージの種類 $type"
    //% group="Player"
    //% weight=75 help=events/message-type
    export function messageType(type: MessageType): string {
        if (type === MessageType.Chat) {
            return "chat";
        }
        else if (type === MessageType.Say) {
            return "say";
        }
        return "tell";
    }

    /**
     * プレイヤーがテレポートしたときにコードを実行します。
     *
     * トリガーの例:
     * 「tp」コマンドを使ったとき
     * コマンドブロックによってテレポートさせられたとき
     *
     * @param distance テレポートした距離（メートル）
     */
    //% blockId=events_onPlayerTeleported
    //% blockAliasFor="events.onPlayerTeleported"
    //% block="プレイヤーが $distance メートル テレポートしたとき"
    //% draggableParameters="reporter"
    //% group="Player"
    //% weight=70 help=events/on-player-teleported
    export function _onPlayerTeleported(handler: (distance: number) => void) {
        events.onPlayerTeleported(handler);
    }

    /**
     * プレイヤーがワールド内を移動したときにコードを実行します。
     *
     * トリガーの例:
     * 歩いた、飛んだ、泳いだとき
     *
     * @param location 移動先の座標
     * @param mode 移動の方法（例：「徒歩」「落下」「水泳」など）
     * @param distance 移動した距離（メートル）
     */
    //% blockId=events_onPlayerTravelled
    //% blockAliasFor="events.onPlayerTravelled"
    //% block="プレイヤーが $mode で $location へ $distance 移動したとき"
    //% draggableParameters="reporter"
    //% group="Player"
    //% weight=60 help=events/on-player-travelled
    //% blockGap=8
    export function _onPlayerTravelled(handler: (location: Position, mode: string, distance: number) => void) {
        events.onPlayerTravelled(handler);
    }

    /**
     * プレイヤーの移動方法。「プレイヤーが移動したとき」イベントで使います。
     */
    //% blockId=events_travelMode
    //% block="移動方法 $method"
    //% group="Player"
    //% weight=55 help=events/travel-mode
    export function travelMode(method: TravelMethod): string {
        return travelMethodToString(method);
    }
}