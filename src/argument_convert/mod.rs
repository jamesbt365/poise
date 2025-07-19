mod channel;
mod emoji;
#[cfg(feature = "cache")]
mod guild;
mod member;
mod message;
mod role;
mod user;

use crate::serenity_prelude as serenity;

#[async_trait::async_trait]
pub trait ArgumentConvert: Sized {
    /// The associated error which can be returned from parsing.
    type Err: std::error::Error + Send + Sync + 'static;

    /// Parses a string `s` as a command parameter of this type.
    async fn convert(
        ctx: impl serenity::CacheHttp,
        guild_id: Option<serenity::GuildId>,
        channel_id: Option<serenity::GenericChannelId>,
        s: &str,
    ) -> Result<Self, Self::Err>;
}
