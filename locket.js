/**
 * Locket Remote Config - VANN THUONG EDITION
 * Môi trường: VS Code / Node.js (để test) & Quantumult X / Surge / Loon (để chạy thực tế)
 */

// --- ĐOẠN MOCK CHO VS CODE ---
// Giả lập môi trường proxy nếu chạy trên VS Code (Node.js). 
// LƯU Ý: Xóa hoặc comment đoạn này khi đưa vào Quantumult X / Surge.
if (typeof $request === "undefined") {
    global.$request = { headers: { "User-Agent": "Locket/1.0" } };
    global.$response = { body: JSON.stringify({}) };
    global.$done = function (res) {
        console.log("Dữ liệu trả về (Mock):");
        console.log(JSON.stringify(JSON.parse(res.body), null, 2));
    };
}
// ------------------------------

var ua = $request.headers["User-Agent"] \vert{}\vert{} $request.headers["user-agent"] || "";
var obj = {};

try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

if (ua.includes("Locket")) {
    obj.Attention = "Phiên bản độc quyền dành riêng cho Vann Thuong!";
    obj.entries = obj.entries || {};

    // 1. Mở khóa các tính năng Premium / VIP
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled", camera_roll: "enabled", camera_theme: "enabled",
            locket_views: "enabled", long_captions: "enabled", longer_video: "enabled",
            unlimited_friends: "enabled", priority_support: "enabled", profile_badge: "enabled",
            remove_ads: "enabled", video: "enabled", custom_widget_frames: "enabled",
            streak_recovery: "enabled", stickers: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true, camera_roll: true, camera_theme: true,
            locket_views: true, remove_ads: true, custom_widget_frames: true, stickers: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight", onboarding: false, after_sent_moment: false,
            on_foreground: false, interval: 2592000, profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: "VANN THUONG VIP", tag_gradient: true, tag_style: "gold_gradient",
            title: "chúc mừng bạn ",
            feature_set: [{ 
                title: "✨✨✨✨✨", 
                body: "Chào mừng Vann Thuong đến với Locket VIP", 
                imageURL: "https://i.ibb.co/xkJMqKn/photo-2026-10-16-15-31-19.png" 
            }],
            primary_button_title: "done", campaign: "locket_gold_welcome_v3",
            start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59", use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
        settings_instagram_url: "he he",
        settings_tiktok_url: "hi hi"
    });

    // 2. Chặn Ads & Tracking
    Object.assign(obj.entries, {
        history_ads_mode: "off", history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false", history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false", history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0", history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false", history_ads_debug_menu: "false",
        sentry_sample_rate: "0", sentry_network_tracing: "false",
        sentry_performance_tracking: "false", sentry_trace_sample_rate: "0", sentry_profiles_sample_rate: "0"
    });

    // 3. Cấu hình Camera & Camera Roll
    var D = 120.0, DS = "120";
    var camCfg = {
        gold_max_duration: D, goldMaxDuration: D, max_duration: D, maxDuration: D,
        ultra_wide: true, ultraWide: true, volume_button: true, volumeButton: true,
        flash_button: true, telephoto: true, srgb: true, lanczos: true, quality_mbps: 0.5, qualityMbps: 0.5
    };
    var rollCfg = {
        gold_max_duration: D, goldMaxDuration: D, video_max_duration: D, videoMaxDuration: D,
        max_duration: D, maxDuration: D, trim_max_duration: D, trimMaxDuration: D,
        camera_roll_max_duration: D, camera_roll_video_max_duration: D,
        max_file_size: 209715200, max_upload_bytes: 209715200, max_size_bytes: 209715200,
        quality_mbps: 0.5, qualityMbps: 0.5, flash_button: true
    };

    obj.entries.camera = JSON.stringify(camCfg);
    obj.entries.camera_roll = JSON.stringify(rollCfg);

    Object.assign(obj.entries, {
        live_photos: JSON.stringify({ capture: true, viewing: true, catch_up: true, widget_looping_mode: "never" }),
        camera_filter_config: JSON.stringify({
            allows_custom_filters: true, show_filter_button: true, sheet_enabled: true, open_sheet_immediately: true,
            sheet_filters: [
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
                { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
            ],
            picker_filters: [
                "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows", "bowling_ball",
                "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "slimed",
                "princess", "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
                "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe", "clown",
                "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face",
                "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
            ]
        }),
        camera_roll_preview_enabled: "true", camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true", internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true", camera_roll_video_max_duration: DS,
        camera_roll_max_duration: DS, camera_roll_duration: DS, max_video_duration: DS,
        video_max_duration: DS, video_trim_max_duration: DS, trim_max_duration: DS,
        gold_max_duration: DS, goldMaxDuration: DS, max_file_size: "209715200",
        max_upload_bytes: "209715200", video_quality_mbps: "0.5", video_sound_enabled: "true",
        microphone_enabled: "true", camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true", zoom_enabled: "true",
        upload_main: "false", upload_main_image_quality: "0.5", upload_main_image_size: "1440",
        upload_thumbnail_image_quality: "0.5", upload_thumbnail_image_size: "1020",
        stickers_enabled: "true", photo_stickers_enabled: "true", video_stickers_enabled: "true"
    });

    // 4. Bỏ giới hạn bạn bè
    Object.assign(obj.entries, {
        max_friends_count: "999999", friend_limit_mode: "0", soft_friend_limit_threshold_count: "999999",
        show_friend_limit_on_cam: "false", signup_max_friends_count: "999999", celebrity_inbox_limit: "999999",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "🌟🫶🌟" }, { threshold: 2000, emoji: "✨💟✨" }, { threshold: 5000, emoji: "⚡️😵‍💫⚡" }, { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
            ]
        }),
        friend_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "✨💗✨" }, { threshold: 2000, emoji: "✨️⭐️✨" }, { threshold: 5000, emoji: "✨💎✨" }, { threshold: 10000, emoji: "✨🔐💛✨" }
            ]
        }),
        new_friends_monitoring_enabled: "true", improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true", emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true", populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true", hide_invite_links: "false", hide_skip_contacts: "true",
        show_all_contacts: "true", show_invite_suggestions: "true", show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
    });

    // 5. Cấu hình Streak (chuỗi)
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    // 6. Tính năng Chat, Groups & Views
    Object.assign(obj.entries, {
        moment_views_enabled: "true", moment_views_v2: "true", record_moment_views: "true",
        notify_moment_views: "true", get_moment_views_as_cloud_function: "true", moment_reactions_v2: "true",
        chat_reactions_enabled: "true", conversation_reactions: "true", typing_indicators_enabled: "true",
        unsend_message_enabled: "true", reply_prototype_enabled: "true", messages_integration: "true",
        conversations_enabled: "true", fetch_moments_in_conversation: "true", hide_chat_button: "false",
        groups_enabled: "true", send_to_self_only_mode: "always_enabled", time_travel_rewind_v2_enabled: "true",
        calendar_delete_moment_enabled: "true", calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true", rollcall_enabled: "true",
        rollcall_comment_actions: "true", rollcall_profile_button: "true", rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false", rollcall_tap_to_tag_enabled: "false"
    });

    // 7. Widget, Frames & Journal
    Object.assign(obj.entries, {
        widget_frame_event_max_images: "10", android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true", widget_badge_v2: "true", widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false", widget_sync_token_reload_mode: "clearTokenNever",
        custom_widget_frames: "enabled", custom_widget_frames_enabled: "true",
        widget_frames_config: JSON.stringify({
            enabled: true, allow_custom_frames: true, unlock_all_styles: true,
            default_style: "vann_thuong_vip",
            styles: [{
                id: "vann_thuong_vip", name: "👑 Vann Thuong VIP", border_style: "ornate_gold",
                crown_badge: true, badge_text: "V.THUONG", corner_radius: 28.0,
                glow_effect: true, glow_color: "#FFD700", overlay_asset: "royal_crown_frame"
            }]
        }),
        widget_frame_styles: JSON.stringify(["vann_thuong_vip", "gold_luxury", "classic"]),
        seasonal_frames_config: JSON.stringify({ enabled: true, auto_rotate: false, override_default: true, current_season_theme: "vann_thuong_vip" }),
        live_activity_onboarding: "true", live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true", live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true", notification_preferences: "true",
        notification_reply_body_visible: "true", prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true", journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false, focus_animation: true, compact_header: true,
            friends_button: true, reverse_scroll_direction: false, streak_visualization: true,
            streak_visualization_style: "gradient", streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2, overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true", profile_menu_v2_enabled: "true"
    });

    // 8. Custom Overlays & Captions (Text chèn lên ảnh)
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true", overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true", music_caption_enabled: "true", music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location", "weather", "time",
            "streak", "star_sign", "party_time", "locket_count", "good_morning", "goodnight",
            "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026", "vann_thuong_1", "vann_thuong_2", "vann_thuong_3"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "👑 Vann Thuong's Signature",
                items: [
                    { overlay_id: "caption:vann_thuong_1", source: "remote", caption: { background: { colors: ["#FF416C", "#FF4B2B"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Vann Thuong VIP", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:vann_thuong_2", source: "remote", caption: { background: { colors: ["#0F2027", "#203A43", "#2C5364"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Đẹp trai như Vann Thuong", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:vann_thuong_3", source: "remote", caption: { background: { colors: ["#11998E", "#38EF7D"] }, icon: { data: "✨", type: "emoji" }, max_lines: 1, text: "Vann Thuong in the house", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 General",
                items: [
                    { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                    { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                    { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                    { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                    { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                    { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                    { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                    { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                    { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                    { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                    { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } }
                ]
            },
            {
                section: "🎨 Holiday Caption",
                items: [
                    { overlay_id: "caption:halloween_2026", source: "remote", caption: { background: { colors: ["#150804", "#C8540D"] }, icon: { data: "🎃", type: "emoji" }, max_lines: 1, text: "Halloween", localized_text: { en: "Halloween", vn: "Halloween" }, text_color: "#FFB182", type: "static_content" } },
                    { overlay_id: "caption:autumn_2026", source: "remote", caption: { background: { colors: ["#FFE0A0", "#F6A53A"] }, icon: { data: "🍂", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Thu", localized_text: { en: "Xin chào Mùa Thu", vn: "Xin chào Mùa Thu" }, text_color: "#FFFFFF",